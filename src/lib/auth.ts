import { supabase } from "./supabase";

export interface UserData {
  id: string;
  email: string;
  role: "customer" | "rider" | "vendor" | "admin";
  firstName: string;
  lastName: string;
  walletBalance: number;
}

export const signUp = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  role: "customer" | "rider" | "vendor",
) => {
  try {
    // 1. Sign up the user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) throw authError;

    if (!authData.user) throw new Error("No user data returned");

    // 2. Create the user profile in the users table
    const { error: profileError } = await supabase.from("users").insert([
      {
        id: authData.user.id,
        email,
        role,
        first_name: firstName,
        last_name: lastName,
        wallet_balance: 0,
      },
    ]);

    if (profileError) throw profileError;

    return { user: authData.user, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (authError) throw authError;

    // Get the user's profile data
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    if (userError) throw userError;

    return { user: { ...authData.user, ...userData }, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error) {
    return { error };
  }
};

export const getCurrentUser = async (): Promise<{
  user: UserData | null;
  error: any;
}> => {
  try {
    const { data: authData } = await supabase.auth.getUser();

    if (!authData.user) return { user: null, error: null };

    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    if (userError) throw userError;

    return { user: userData as UserData, error: null };
  } catch (error) {
    return { user: null, error };
  }
};
