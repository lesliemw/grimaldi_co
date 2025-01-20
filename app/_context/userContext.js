"use client";
import React, { useEffect, useState, createContext, useContext } from "react";
import { supabase } from "../_utils/supabase";
import { useUser } from "../_api/useUser";
import { getCurrentUser } from "../_api/apiAuth";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const { data } = getCurrentUser();

  useEffect(function () {
    const { data: subscription } = supabase.auth.onAuthStateChange(function (
      event,
      session
    ) {
      setUser(session ? session.user : null);
    });

    supabase.auth.getSession().then(function (response) {
      if (response.data.session) {
        setUser(response.data.session.user);
      }
    });

    return () => {
      if (subscription && typeof subscription.unsubscribe === "function") {
        subscription.unsubscribe();
      } else if (typeof subscription === "function") {
        subscription();
      }
    };
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

function useAuth() {
  return useContext(UserContext);
}

export { UserProvider, useAuth };
