## Запуск 

docker compose up - поднять бд и бекенд
yarn run start:dev - в режими разработчика

## Миграции
docker ps - посмотреть контейнеры и найти id nest-backend_main
docker exec -it <container_id> bash
yarn run migration:run - подтянуть апдейт для бд
exit
## Документация 
swager localhos:port/api