// eslint-disable-next-line no-unused-vars
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import AppLayout from "../app-layout/components/AppLayout"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
