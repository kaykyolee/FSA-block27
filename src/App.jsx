import { useState } from 'react'
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import './App.css'

export default function App() {

  return (
    <>
      <Authenticate/>
      <SignUpForm/>
    </>
  );
}
