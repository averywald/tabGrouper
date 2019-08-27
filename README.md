# tabGrouper
It's designed to be minimal, yet effective.  The extension alphabetizes tabs by hostname - effectively grouping tabs with shared hosts, which solves an organizational (or OCD) problem in my life.

## tabGrouper has 3 triggers
1. When the extension's button is clicked
2. When the shortkey (defaulted to CTRL + SHIFT + Y / CMD + SHIFT + Y) listed in ```manifest.json``` is pressed
3. When a new tab is opened

## trying it out
tabGrouper can be loaded into Firefox for testing by 
1. cloning the repo onto your local machine
2. typing 'about:debugging' into the address bar
3. clicking on the 'Load Temporary Add-on' button
4. opening any file from the project

## developer testing
additionally, mozilla browser extensions can be temporarily opened via the commmand line by
1. downloading the ```web-ext``` NPM package by running ```npm install -g web-ext```
2. running ```web-ext run``` in the project's root folder