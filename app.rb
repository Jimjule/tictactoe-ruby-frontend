require('sinatra')
require('shotgun')
require('tictactoe_jules')
require './lib/web_in_out'

get '/' do
  erb :index
end