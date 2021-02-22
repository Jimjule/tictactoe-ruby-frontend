require('sinatra')
require('shotgun')
require('tictactoe_jules')
require './lib/web_in_out'

get '/' do
  erb :index
end

post '/game_setup' do
  erb :game_setup
end