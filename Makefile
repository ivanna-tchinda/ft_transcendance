all:
	docker compose -f ./docker-compose.yml build
	docker compose -f ./docker-compose.yml up -d

stop:
	docker compose -f ./docker-compose.yml down

up:
	docker compose -f ./docker-compose.yml up -d

ls:
	docker ps
	docker volume ls
	docker network ls

logs:
	docker compose -f ./docker-compose.yml logs

clean:
	docker compose -f ./docker-compose.yml down --volumes --remove-orphans


fclean: clean
	@docker system prune -af

re: fclean all

.PHONY: all stop up ls logs clean fclean re
