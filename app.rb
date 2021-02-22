require('sinatra')
require('shotgun')
require('tictactoe_jules')
require './lib/web_in_out'

get '/' do
  erb :index
end

get '/game_setup' do
  erb :game_setup
end

get '/game_ready' do
  @params = params
  @player_1_name = params['player_1_name']
  "Hello #{params['player_1_name']}"
end