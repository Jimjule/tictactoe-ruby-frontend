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
  computer = params['computer'] == 'checked'
  params['player_2_name'] == nil ? player_2_name = 'Computer' : player_2_name = params['player_2_name']
  board_size = params['board_size']

  @tictactoe_jules = Tictactoe_jules.new(
    Player_factory.generate('X', false, player_1_name),
    Player_factory.generate('O', computer, player_2_name),
    Board.new(board_size.to_i)
  )
  session[:tictactoe_jules] = @tictactoe_jules
  session[:max_turns] = @tictactoe_jules.board.max_turns
  session[:game_status] = 'In Progress'
  erb :game_start
end

get '/game_start' do
  erb :game_start
end

post '/game_start/player_move' do
  player_move = params['player_move']
  session[:tictactoe_jules].submit_move(player_move) if session[:tictactoe_jules].board.is_square_free?(player_move.to_i)
  session[:game_status] = "#{session[:tictactoe_jules].current_player.id} is the Winner!" if session[:tictactoe_jules].winner
  session[:game_status] = "Draw!" if session[:tictactoe_jules].game_is_over && !session[:tictactoe_jules].winner
  erb :game_start
end

post '/game_start/computer_move' do
  computer_move = session[:tictactoe_jules].current_player.select_move(session[:tictactoe_jules].board)
  session[:tictactoe_jules].submit_move(computer_move)
  session[:game_status] = "#{session[:tictactoe_jules].current_player.id} is the Winner!" if session[:tictactoe_jules].winner
  session[:game_status] = "Draw!" if session[:tictactoe_jules].game_is_over && !session[:tictactoe_jules].winner
  erb :game_start
end
