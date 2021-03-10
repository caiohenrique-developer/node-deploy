### <a name="top"></a>

<h1 align="center">
  <a href="https://gobarber.desenvolvendosistemas.dev.br">
    <img alt="GoBarber logotipo" src="src/assets/logo.svg" />
  </a>
</h1>

<h5 align="center">
  💈 GoBarber api, a project developed to offer barber shop scheduling.
</h5>

<p align="center">
  <a href="#-techs-flying_saucer">🛸 Techs</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-prerequisites-warning">⚠️ Prerequisites</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-how-to-use-grey_question">❔ How To Use</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-badges-bookmark">🔖 Badges</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license-closed_lock_with_key">🔐 License</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contact-me-phone">☎ Contact Me</a>
</p>

<br>

<p align="center">
  <img alt="GoBarber mockup image" src="src/assets/mockuper.png" width="100%" />
</p>

## [🔝](#top) Techs :flying_saucer:

This project was developed at the [RocketSeat GoStack Bootcamp 11](https://rocketseat.com.br) with the following technologies:

-  [AWS SDK](https://github.com/aws/aws-sdk-js)
-  [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
-  [Cors](https://github.com/expressjs/cors)
-  [Celebrate](https://github.com/arb/celebrate)
-  [Date-fns](https://date-fns.org/)
-  [Express](https://expressjs.com/)
-  [Handlebars](https://handlebarsjs.com/)
-  [Jest](https://jestjs.io/)
-  [JSON Web Tokens - JWT](https://jwt.io/)
-  [MongoDB](https://github.com/mongodb/node-mongodb-native)
-  [Multer](https://github.com/expressjs/multer)
-  [NodeJS][nodejs]
-  [Nodemailer](https://nodemailer.com/about/)
-  [Redis](https://redis.io/)
-  [TypeORM](https://typeorm.io/#/)
-  [TSyringe](https://github.com/Microsoft/tsyringe)
-  [TypeScript](https://www.typescriptlang.org/)
-  [Uuidv4](https://www.npmjs.com/package/uuidv4)
-  [VS Code][vc] with [ESLint][vceslint], [EditorConfig][vceditconfig] & [Prettier][vcprettier]

## [🔝](#top) Prerequisites :warning:

In order to use and test this project locally, you should've already setup the development environment. <br>
Therefore, firstly i recommend that you install [Docker](https://www.docker.com/) on your machine and download the images [postgres](https://hub.docker.com/_/postgres), [mongo](https://hub.docker.com/_/mongo) and [redis](https://hub.docker.com/_/redis/) following the steps in the section on the page **How to use this image**. _Or you can also just follow the steps in the "<a href="#grey_question-how-to-use">❔ How To Use</a>" section of this doc._ <br>
_Or go to [**gobarber.desenvolvendosistemas.dev.br**](https://gobarber.desenvolvendosistemas.dev.br/) to see the project in a production environment._

-	Insomnia request routes: <br>
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=GoBarber%20API&uri=https%3A%2F%2Fgithub.com%2Fcaiohenrique-developer%2Fnode-deploy%2Fblob%2Fmaster%2F.github%2Fworkflows%2Fdocs%2FGoBarber%2520API%2520-%2520Insomnia_2021-02-18)

## [🔝](#top) How To Use :grey_question:

To clone and run this application locally, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer.

<details open>
  <summary>Hit me to toggle collapse: 🕹️<sup>🤏</sup></summary>

  _From your `command line` follow these steps..._

  ```bash
	# Clone the project
	$ git clone https://github.com/caiohenrique-developer/node-deploy 'GoBarber API' && cd 'GoBarber API'

	# Install dependencies
	$ yarn
	# or
	$ npm i

	# Install PostgreSQL image
	# Maybe you must be use the sudo command
	$ docker run --name your-container-name \
			-e POSTGRES_USER=your-username \
			-e POSTGRES_DB=your-database \
			-e POSTGRES_PASSWORD=your-secret-password \
			-p 5432:5432 \
			-d postgres

	# Install MongoDB image
	$ docker run --name your-container-name -p 27017:27017 -d -t mongo

	# Install Redis image
	$ docker run --name your-container-name -p 6379:6379 -d -t redis:alpine

	# Copy the files
	# Replace in the (..._TYPE, ..._HOST, ..._PORT, ..._USER, ..._PASS, ..._DB) variables with the values of the images you downloaded for the Postgres, Mongo and Redis containers, on .env file generated
	$ cp .env.example .env && cp ormconfig.example.js ormconfig.js

	# Run the migrations in order to create the database schema
	$ yarn typeorm migration:run

	# Start the project
	$ yarn dev:server

	# Very well, now you can enjoy this project! ;)
  ```

  + <details>
      <summary>See also: 🕹️<sup>🤏</sup></summary>

      #### WEB

      <a href="https://github.com/caiohenrique-developer/react-deploy">
        <img width="350px" alt="GoBarber front-end repository" src="https://github-readme-stats.vercel.app/api/pin/?username=caiohenrique-developer&repo=react-deploy&theme=dark" />
      </a>

      #### MOB

      <a href="https://github.com/caiohenrique-developer/react-native-deploy">
        <img width="350px" alt="GoBarber app mobile repository" src="https://github-readme-stats.vercel.app/api/pin/?username=caiohenrique-developer&repo=react-native-deploy&theme=dark" />
      </a>
    </details>
</details>

<p align="center">
  <img alt="GoBarber background image" src="src/assets/thanks-message.js.svg" width="700" />
</p>

## [🔝](#top) Badges :bookmark:

<p align="center">
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/caiohenrique-developer/node-deploy">

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/caiohenrique-developer/node-deploy">

  <a href="https://www.codacy.com/app/caiohenrique-developer/node-deploy?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=caiohenrique-developer/node-deploy&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy Grade" src="https://img.shields.io/codacy/grade/4f87fc059ec846118f2ef2950200b13a.svg">
  </a>

  <a href="https://github.com/caiohenrique-developer/node-deploy/commits/master">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/caiohenrique-developer/node-deploy">
  </a>

  <a href="https://github.com/caiohenrique-developer/node-deploy/releases">
    <img alt="GitHub Releases" src="https://img.shields.io/github/release-date/caiohenrique-developer/node-deploy">
  </a>

  <a href="https://github.com/caiohenrique-developer/node-deploy/tags">
    <img alt="GitHub Tags" src="https://img.shields.io/github/package-json/v/caiohenrique-developer/node-deploy/master">
  </a>

  <a href="https://github.com/caiohenrique-developer/node-deploy/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/caiohenrique-developer/node-deploy">
  </a>

  <img alt="Repository Size" src="https://img.shields.io/github/repo-size/caiohenrique-developer/node-deploy">

  <img alt="GitHub License" src="https://img.shields.io/github/license/caiohenrique-developer/node-deploy">

  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>

  <img src="https://img.shields.io/badge/Markdown-000000?style=flat&logo=markdown&logoColor=white"/>

  <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=flat&logo=visual%20studio%20code&logoColor=white"/>

  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>

  <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white"/>

  <img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/>

  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=yarn&logoColor=white"/>

  <img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white"/>

  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white"/>

  <img src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white"/>

  <img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white"/>
</p>

## [🔝](#top) License :closed_lock_with_key:

Copyright © 2021 GoBarber, [MIT](https://github.com/caiohenrique-developer/node-deploy/blob/master/LICENSE) .
###### _This project is under the <sup>MIT</sup> license. See the license for more information._

---

<blockquote align="center">“Always running in search of the goals!” <br> Done with ♥ by myself 👇 <a href="#-contact-me-phone">Get in touch!</a></blockquote>

## [🔝](#top) Contact Me :phone:

<p align="left">
  <img align="left" alt="Profile Avatar" src="./src/assets/professional.png" width="80" />

  <br>

  <a href="https://www.linkedin.com/in/caio-henrique-024627171">
    <img align="center" alt="LinkedIn" src="https://img.shields.io/badge/Caio%20Henrique-0077B5?logo=linkedin&logoColor=white&style=flat-square" />
  </a>
  <a href="mailto:caiohenrique.developer@gmail.com">
    <img align="center" alt="Gmail" src="https://img.shields.io/badge/caiohenrique.developer@gmail.com-D14836?logo=gmail&logoColor=white&style=flat-square" />
  </a>
  <a href="https://api.whatsapp.com/send?phone=5511943902438&text=Fala%20Caio,%20como%20vai?">
    <img align="center" alt="Whatsapp" src="https://img.shields.io/badge/(11)%2094390%202438-25D366?style=social&logo=whatsapp&logoColor=black" />
  </a>
</p>

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcprettier]: https://prettier.io/