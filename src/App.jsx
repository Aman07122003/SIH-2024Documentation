import React from 'react';
import { Route, Routes } from "react-router-dom";
import Page_1 from './components/Page_1';
import Page_2 from './components/Page_2';
import Page_3 from './components/Page_3';
import Idea_Title from './components/Featured_Slides/Idea_Title';
import FeasibilityViability from './components/Featured_Slides/FeasibilityViability';
import ImpactBenifits from './components/Featured_Slides/ImpactBenifits';
import Project_Architecture from './components/Featured_Slides/Project_Architecture';
import ResearchReference from './components/Featured_Slides/ResearchReference';
import Technical_Approach from './components/Featured_Slides/Technical_Approach';
import Contact_Us from './components/Contact_Us';
import PdfViewer from './components/PdfViewer';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page_1 />} />
      <Route path="/Page_2" element={<Page_2 />} />
      <Route path="/Page_3" element={<Page_3 />} />
      <Route path="/Idea_Title" element={<Idea_Title />} />
      <Route path="/FeasibilityViability" element={<FeasibilityViability />} />
      <Route path="/ImpactBenifits" element={<ImpactBenifits />} />
      <Route path="/Project_Architecture" element={<Project_Architecture />} />
      <Route path="/ResearchReference" element={<ResearchReference />} />
      <Route path="/Technical_Approach" element={<Technical_Approach />} />
      <Route path="/contact" element={<Contact_Us />} />
      <Route path="/Pdfviewer" element={<PdfViewer />} />
      
    </Routes>
  );
};

export default App;
