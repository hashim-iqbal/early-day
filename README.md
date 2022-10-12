# EarlyDay Simple Rails + React Exam

> Please complete this as a private repo, and send an email to james@earlyday.com with your submission. Other candidates are completing the same test and if you make a PR it ruins their experience :D

Uses sqlite and a combined repo, so setup is as easy as

Clone the repo

API:

```
bundle install
bundle exec rake db:create db:migrate db:seed
bundle exec rails s
```

client:

```
cd client
yarn install
yarn start
```

Make sure that the api url is present in the package.json (proxy address) in the client folder

The idea of this simple application is to allow users to apply to jobs and manage their applications. Some of the project has been setup for you.

There are currently 3 models

User

```
Authentication
has many job applications
```

Job

```
Contains job details
(needs to generate a unique slug when created)
Needs the implementation of status: open, closed, draft
```

Job Application

```
belongs to a user and a job
has a status
Needs the implementation of status: applied, reviewed, rejected, withdrawn
```
