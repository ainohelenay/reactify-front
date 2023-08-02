/**
 * Reactify - A Material Design Admin Template
 * Copyright 2023 All Rights Reserved
 * Made Wih Love
 * Created By The Iron Network, LLC
 */
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import MainApp from './App';

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<MainApp/>); 
