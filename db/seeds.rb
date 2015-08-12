# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
chile = Country.create name: 'Chile'
claudio = User.create first_name: 'Claudio', last_name: 'Guerra', id_number: '17026575-0' email: 'claudio.guerra@simplecases.cl', password: '12345678', password_confirmation: '12345678', country: chile
