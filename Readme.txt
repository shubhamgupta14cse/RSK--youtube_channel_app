Getting Started-
Boilerplate- react starter-kit 
reason - me being a big fan of technoloies like graphQL ,sequelize ORM,PWA, serverless although this boiler plate dosen't provide all of these but its great to start with plus it provide some awesome functionality 
like Isomorphic app for server side rendering , universal router and etc.

now,
step -1  go to the YoutubeApp directory and run Yarn install -- this will install all the peer and dev dependencies and additional NPM modules configured for this app.
step -2 after successfull yarn install you need to configure the sequelize ORM to connect to data base 
step -2.1 got to /src/data/sequelize.js and edit the line no 13 as per your user name and password , you dont need to change the mysql schema/database name because in the next step we would import the dump database to our mysql server through mysql workbench.(NOTE: root was my username and shubhamdb was password for that user you need to add yours)
step -2.2 now, go to mysql workbench and do a data import in server menu dropdown. import the dump from the /dumps/Dump20190310 provided in the zip folder .(NOTE: this data has been dump from CSV file provided along with the project but have changed the coloumn and this will work approppriately, also this dump /import would create the entire Mysql schema/database with the correct name)
step -3 now if the import is successfull and you can see the schema in mysql workbench , next step is to start the react starte-kit by the command Yarn start in the YoutubeApp directory. this will start the dev server on localhost:3000

and the project is live.


the development process
1 . have made a sequelize model for youtube data table in /src/data/model/youtubeChannelData.js
2  . have created the rest endpoint in server.js file . /src/server.js
3  . have created the homepage in /src/routes/home/home.js(almost all of the react code significant for this app is written here along with inline and modular CSS which i have imported from various other component which come by default with RSK.
4  . have created the single channel page in src/routes/channel dir, the navigation to these channels component happens via react Link wraping which again is implemented using history.js.

so in short below mentioned are the filed where the significant code is written
1 src/data/model/youtubechanneldata.js
2 src/data/model/index.js
3 src/data/sequelize.js
4 src/routes/home
5 src/routes/channel
6 src/routes/index.js
7 src/server.js
 


now form my side the area of improvements here in this projects are
1 configure and use navigation and routing in RSK which utilise the powerfull universal router and history API substitute in react. and make diffrent client react route for different channels and their profile page.
2 configure and utilise graphQL aas the data API , like i mentioned above how much i appericiate the graphQL specification and implementation by facebook, reason being these tech are very impresive in counties where still in some rural part their exist network/bandwidth problems.
