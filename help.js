var clc = require("cli-color");

console.log(clc.redBright("Migration"))
console.log(clc.greenBright("Migration installation"))
console.log("1. npm install mysql")
console.log("2.npm install -g db-migrate")
console.log("3.npm i db-migrate-mysql")

console.log(clc.redBright("before initializing create database.json as database.example.json"))
console.log("Migrations Folder creation - db-migrate create initialize --sql-file ")

console.log(clc.greenBright("Migration commmands"))
console.log("Migrations commands link:https://db-migrate.readthedocs.io/en/latest/Getting%20Started/commands/")
console.log("Migrations up - db-migrate up x")
console.log("Migrations up all - db-migrate up")
console.log("Migrations down - db-migrate down x")
console.log("Migrations down all - db-migrate reset")
console.log("Migrations status - db-migrate check")

console.log("Migrations creating migration - db-migrate create migrationname")
console.log("Migrations creating migration sql - db-migrate create anothermigration")


console.log("Migrations create db - db-migrate db:create dbname")
console.log("Migrations drop db - db-migrate db:drop dbname")



