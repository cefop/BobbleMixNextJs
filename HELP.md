## Github Workflows

> provide en environement variables inside `Action`

there are 2 main actions inside `.github/workflows`

- update hasura to an Hasura Cloud instance
- upload frontend to vercel

## solve some random error

> Resolve docker-compose up error postgres PID already in use

```sh
docker stop $(docker ps -a -q)
docker ps # again to make sure containers is off
sudo lsof -i tcp:5432 # now you get and list of process running and using 5432 port find and copy PID
sudo kill -9 yout_PID
```
