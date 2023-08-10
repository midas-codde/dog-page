import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./routes/Home.tsx"
import Races from "./routes/Races.tsx"
import AkitaPage from './routes/akitaPage.tsx'
import AmericanPage from './routes/americanPage.tsx'
import BeaglePage from './routes/beaglePage.tsx'
import BorzoiPage from './routes/borzoiPage.tsx'
import BoxerPage from './routes/boxerPage.tsx'
import BuldogPage from './routes/buldogPage.tsx'
import BullPage from './routes/bullPage.tsx'
import ChihuahuaPage from './routes/chihuahuaPage.tsx'
import ChowPage from './routes/chowPage.tsx'
import CorgiPage from './routes/corgiPage.tsx'
import DachPage from './routes/dachPage.tsx'
import DalmataPage from './routes/dalmataPage.tsx'
import DobermanPage from './routes/dobermanPage.tsx'
import DogoPage from './routes/dogoPage.tsx'
import GoldenPage from './routes/goldenPage.tsx'
import HuskyPage from './routes/huskyPage.tsx'
import JackPage from './routes/jackPage.tsx'
import LabradorPage from './routes/labradorPage.tsx'
import MalamutePage from './routes/malamutePage.tsx'
import PastorAlemaoPage from './routes/pastorAlemaoPage.tsx'
import PastorBelgaPage from './routes/pastorBelgaPage.tsx'
import PinscherPage from './routes/pinscherPage.tsx'
import PitbullPage from './routes/pitbullPage.tsx'
import PoodlePage from './routes/poodlePage.tsx'
import RottweilerPage from './routes/rottweilerPage.tsx'
import ShibaPage from './routes/shibaPage.tsx'
import ShitzuPage from './routes/shitzuPage.tsx'
import ViraPage from './routes/viraPage.tsx'
import WhippetPage from './routes/whippetPage.tsx'
import YorkPage from './routes/yorkPage.tsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
   { path: "/", element: <Home /> },
   { path: "races", element: <Races /> },
   { path: "races/akita", element: <AkitaPage />},
   { path: "races/american-bully", element: <AmericanPage />},
   { path: "races/beagle", element: <BeaglePage />},
   { path: "races/borzoi", element: <BorzoiPage />},
   { path: "races/boxer", element: <BoxerPage />},
   { path: "races/bulldog", element: <BuldogPage />},
   { path: "races/bull-terrier", element: <BullPage />},
   { path: "races/chihuahua", element: <ChihuahuaPage />},
   { path: "races/chow-chow", element: <ChowPage />},
   { path: "races/corgi", element: <CorgiPage />},
   { path: "races/dachshund", element: <DachPage />},
   { path: "races/dalmata", element: <DalmataPage />},
   { path: "races/doberman", element: <DobermanPage />},
   { path: "races/dogo", element: <DogoPage />},
   { path: "races/golden-retriever", element: <GoldenPage />},
   { path: "races/husky-siberiano", element: <HuskyPage />},
   { path: "races/jack-russel", element: <JackPage />},
   { path: "races/labrador-retriever", element: <LabradorPage />},
   { path: "races/malamute", element: <MalamutePage />},
   { path: "races/pastor-alemao", element: <PastorAlemaoPage />},
   { path: "races/pastor-belga", element: <PastorBelgaPage />},
   { path: "races/pinscher", element: <PinscherPage />},
   { path: "races/pitbull", element: <PitbullPage />},
   { path: "races/poodle", element: <PoodlePage />},
   { path: "races/rottweiler", element: <RottweilerPage />},
   { path: "races/shiba", element: <ShibaPage />},
   { path: "races/shitzu", element: <ShitzuPage />},
   { path: "races/vira-lata", element: <ViraPage />},
   { path: "races/whippet", element: <WhippetPage />},
   { path: "races/yorkshire", element: <YorkPage />}
])


ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
)