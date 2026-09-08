# Leads Tracker

A simple chrome extension to save links so you dont lose them while browsing.

## What it does
- save the current tab link with one click
- add any link manually 
- click on saved link to open it in new tab
- delete a single link or clear all of them
- links stay saved even after closing chrome (using localStorage)

## Why i made this
Chrome already has bookmarks, so this isn't meant to replace that. 
I built this to get hands on practice with the chrome extension 
apis, diving into chrome.tabs and localstorage. It's a smaller, faster way to jot down links 
i'm actively working through (like job postings while applying), 
without digging through bookmark folders.

## Built with
- javascript 
- html and css
- chrome extension manifest v3
- chrome.tabs api
- localstorage


#Live Demo

https://bhumikacodess.github.io/Tab-leads-tracker/

## How to run it
1. download or clone this repo
2. open chrome and go to chrome://extensions
3. turn on developer mode (top right toggle)
4. click load unpacked
5. select the folder with these files
6. done, icon should show in your toolbar
