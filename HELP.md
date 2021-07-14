> Resolve error postgres PID already in use

```sh
docker stop $(docker ps -a -q)
docker ps # again to make sure containers is off
sudo lsof -i tcp:5432 # now you get and list of process running and using 5432 port find and copy PID
sudo kill -9 yout_PID
```
