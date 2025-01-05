import { supabase } from "../_utils/supabase";

export async function signup({ fname, lname, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fname,
        lname,
      },
    },
  });
  console.log(data);
  if (error) throw new Error(error.message);
  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({
  password,
  fname,
  lname,
  vipStatus,
  notificationsOrders,
  streetAddress,
  city,
  county,
  postalCode,
  country,
}) {
  //1. Update data
  let updateData;
  if (password) updateData = { password };
  if (fname) updateData = { data: { fname } };
  if (lname) updateData = { data: { lname } };
  if (vipStatus) updateData = { data: { vipStatus } };
  if (notificationsOrders) updateData = { data: { notificationsOrders } };
  if (streetAddress) updateData = { data: { streetAddress } };
  if (city) updateData = { data: { city } };
  if (county) updateData = { data: { county } };
  if (postalCode) updateData = { data: { postalCode } };
  if (country) updateData = { data: { country } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  return updatedUser;
}
