# CS386 Team 6 Project: LilyPad

A web app that allows users to link their Spotify, Youtube Music, and Apple Music accounts in order to get the best options available when it comes to streaming, favoriting, and playlist-making.

## Getting Started

Once you have the repo on your local machine, install dependencies with `npm install` or `npm install --save`. You'll also need a .env file, with host name, a rapid api key subscribed to musicapi13, and a path to your database, preferably PostgreSQL. With those set up, run `npm run dev` in your command line, and navigate to localhost. You should see the app up and running.

### Prerequisites

Node Package Manager needs to be installed for `npm install` and `npm run dev` to work.

### Installing

#### Step 1:

Fork or clone the repo to your local machine.

In the command prompt, navigate to the directory you'd like to install in.

`git clone https://github.com/CS386Team6/LilyPad.git`

#### Step 2:

Install the necessary dependencies for the project

Navigate inside the new folder you just made:

`cd LilyPad`

Run the install command:

`npm install` or `npm install --save`

#### Step 3:

Set up your .env file.

Create a new file named .env or .env.development:

`touch .env` or `touch .env.development`

Open the file with your favorite text editor:

`vim .env` or `code .env`

Create three environment variables, one for the database url, one for the rapid api key, one for the host:

`DATABASE_URL="{YOUR-DATABASE-URL-HERE}"

NEXT_PUBLIC_RAPID_API_KEY="{YOUR-RAPID-API-KEY-HERE}"

NEXT_PUBLIC_HOST=http://localhost:3000`

#### Step 4:

Set up your database schema by running:

`npx prisma init`

and follow the steps.

#### Step 5:

Run the local instance of the app on your local host by running the command:

`npm run dev`

in your command line.

#### Step 6:

Navigate to http:localhost:3000 and see the live webpage.

#### Step 7:

You can create an account from the home page, start creating your own playlists, or poke around in the pages folder to add your own features.

## Running the tests

TBD

### Break down into end to end tests

TBD

### And coding style tests

TBD

## Deployment

You'll need a host and a server to deploy this app, but pretty much anything will do.

## Built With

* [Next.JS](https://nextjs.org/) - The web framework used
* [Prisma](https://www.prisma.io/) - Database Management
* [MusicApi](https://rapidapi.com/freeyourmusic-freeyourmusic-default/api/musicapi13) - Powers search engine feature

## Contributing

Please read [CONTRIBUTING.md] for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Team Members

* **Nathan Seitz** - [NathanSeitz](https://github.com/NathanSeitz)
* **Rino De Guzman** - [Rino-DG](https://github.com/Rino-DG)
* **Gannon Rowlan** - [gannonrowlan](https://github.com/gannonrowlan)
* **Alan Hakala** - [AlanHakalaDev](https://github.com/AlanHakalaDev)
* **Isaac Faulkner** - [iwf2](https://github.com/iwf2)
* **Vanshi Vavilla** - [vv482](https://github.com/Vamshi178)

See also the list of [contributors](https://github.com/CS386Team6/LilyPad) who participated in this project.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Ana Paula Chaves Steinmacher, Professor for this CS386 Project.
