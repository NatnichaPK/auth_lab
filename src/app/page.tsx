"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@mui/material";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <div className={styles.page}><h1>HomePage</h1></div>
        <Button variant="contained" onClick={() => signOut()}>Logout</Button>
      </>
    );
  } else {
    return (
      <div className={styles.page}>
        <Button variant="contained" href="/signin">Login</Button>
      </div>
    );
  }
}
