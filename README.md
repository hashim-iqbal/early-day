# EarlyDay Simple Rails + React Exam

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
