# setup angular app.
install node js & npm

add angular using "npm install @angular/cli"

# Open the Angular-MFE-Example in visual studio code
using following command:
>npm install

# Run the application using following commands
terminal one
>ng serve mfe1

terminal two
>ng serve host

terminal three
>ng serve mfe2

then run the below url in browser
http://localhost:4200


Application steps:
1.	Workspace creation
ng new angular-mfe-example --createApplication="false" 
2.	Create host app
ng g application host --routing --style=css 
3.	Create child app
ng g application mfe1 --routing --style=css
4.	Module federation for host and child


ng add @angular-architects/module-federation --project host --port 4200

ng add @angular-architects/module-federation --project mfe1 --port 5000

ng add @angular-architects/module-federation --project mfe1 --port 5001

