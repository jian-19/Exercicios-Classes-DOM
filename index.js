import { Component } from "./src/js/Component.js"
import { Form } from "./src/js/Form.js"
import { Input } from "./src/js/Input.js"
import { Label } from "./src/js/Label.js"

const title = new Component('h1', 'body', { innerText: 'Olá, Mundo!' })
console.log(title)

title.tag = 'h2'
title.build().render()

const form = new Form('body')

const label = new Label('Nome: ', form, { htmlFor: 'nameInput' })
const input = new Input(form, { id: 'nameInput', name: 'birthday' })

form.render()

label.render()
form.addChildren(input)

form.addChildren(
  new Component('br'),
  new Component('br'),
  new Label('Data de Nascimento: ', { htmlFor: 'birthdayInput'}),
  new Input(form, { id: 'birthdayInput', name: 'birthday', type: 'date' })
)