#!/usr/bin/env node

'use strict'

const boxen = require('boxen')
const chalk = require('chalk')
const inquirer = require('inquirer')
const clear = require('clear')
const open = require('open')
const ora = require('ora')
const cliSpinners = require('cli-spinners')
clear()

const prompt = inquirer.createPromptModule()

const loading = () => {
  const loader = ora({
    text: 'Loading...',
    spinner: cliSpinners.dots,
  }).start()
  setTimeout(() => {
    loader.stop()
  }, 7000)
}

const color = {
  boxBorder: '#ffc0cb',
  name: '#ff69b4',
  blog: '#d9b8f1',
  card: '#e67474',
  vue: '#4fc08d',
  react: '#61dafb',
  python: '#3e74a2'
}

const questions = [
{
  type: "list",
  name: "action",
  message: "What you want to do?",
  choices: [
  {
    name: `Send me an ${chalk.bold.green("email")}`,
    value: () => {
      open("mailto:fz6meng@gmail.com")
      loading()
    }
  },
  {
    name: `Open my ${chalk.bold.hex(color.name)("blog")}`,
    value: () => {
      open("https://fz6m.com")
      loading()
    }
  },
  {
    name: "Just quit.",
    value: () => {
      clear()
    }
  }]
}]

const data = {
  name: chalk.bold.hex(color.name)('             Yingci (fz6m)'),

  github: chalk.cyan('https://github.com/fz6m'),
  blog: chalk.hex(color.blog)('https://fz6m.com'),
  csdn: chalk.hex(color.blog)('https://csdn.fz6m.com'),
  card: chalk.hex(color.card)('yarn') + ' ' + chalk.white('fz6m'),

  labelGitHub: chalk.white.bold('   github:'),
  labelBlog: chalk.white.bold('     blog:'),
  labelCsdn: chalk.white.bold('     csdn:'),
  labelCard: chalk.white.bold('     card:')
}

const me = boxen(
  [
    `${data.name}`,
    ``,
    ``,
    `${data.labelGitHub}  ${data.github}`,
    ``,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelCsdn}  ${data.csdn}`,
    ``,
    `${data.labelCard}  ${data.card}`,
    ``,
    `${chalk.italic(' I am currently learning')} ${chalk.bold.hex(color.vue)('Vue.js')}, ${chalk.bold.hex(color.react)('React')}`,
    ``,
    `${chalk.italic(' Programming with love')}`,
    ``,
    `${chalk.italic(' Things I code with')}`,
    ``,
    `         ${chalk.bold.hex(color.vue)('Vue.js')}  ${chalk.bold.hex(color.react)('React')}  ${chalk.bold.hex(color.python)('Python')}`
  ].join("\n"),
  {
    margin: 1,
    float: 'center',
    padding: {
      top: 3,
      left: 8,
      right: 8,
      bottom: 3
    },
    borderStyle: 'round',
    borderColor: color.boxBorder
  }
);

console.log(me)
const tip = `Tip: try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above\n`
console.log(tip)

prompt(questions).then(answer => answer.action())