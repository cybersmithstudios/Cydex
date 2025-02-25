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
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          role: role,
        },
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });

    if (authError) throw authError;
    if (!authData.user) throw new Error("No user data returned");

    return { user: authData.user, error: null };
  } catch (error: any) {
    console.error("Signup error:", error);
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
    if (!authData.user) throw new Error("No user data returned");

    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    if (userError) throw userError;

    return {
      user: {
        id: userData.id,
        email: userData.email,
        firstName: userData.first_name,
        lastName: userData.last_name,
        role: userData.role,
        walletBalance: userData.wallet_balance || 0,
      },
      error: null,
    };
  } catch (error: any) {
    console.error("Signin error:", error);
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

    return {
      user: {
        id: userData.id,
        email: userData.email,
        firstName: userData.first_name,
        lastName: userData.last_name,
        role: userData.role,
        walletBalance: userData.wallet_balance || 0,
      },
      error: null,
    };
  } catch (error: any) {
    console.error("Get current user error:", error);
    return { user: null, error };
  }
};
