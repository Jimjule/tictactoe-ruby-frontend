require('sinatra')
require('shotgun')
require('tictactoe_jules')

configure do
  enable :sessions unless test?
  set :session_secret, "secret words"
end

get '/' do
  erb :index
end

get '/game_setup' do
  erb :game_setup
end

post '/game_start' do
  player_1_name = params['player_1_name']
  computer = params['computer']
  params['player_2_name'] == nil ? player_2_name = 'Computer' : player_2_name = params['player_2_name']
  board_size = params['board_size']

  @tictactoe_jules = Tictactoe_jules.new(
    Player_factory.generate('X', false, player_1_name),
    Player_factory.generate('O', computer, player_2_name),
    Board.new(board_size.to_i)
  )
  session[:tictactoe_jules] = @tictactoe_jules
  erb :game_start
end

get '/game_start' do
  @tictactoe_jules = session[:tictactoe_jules]
  erb :game_start
end

post '/game_start/player_move' do
  player_move = params['player_move']
  session[:tictactoe_jules].submit_move(player_move)
  @tictactoe_jules = session[:tictactoe_jules]
  erb :game_start
end
