import React from 'react';
import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom/client';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Outlet, Link, NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import axios from 'axios';
