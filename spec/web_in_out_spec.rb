require 'web_in_out'

describe Web_in_out do
  let(:web_in_out) { Web_in_out.new(nil, nil) }

  it 'Has a print method' do
    expect(web_in_out).to respond_to(:print).with(1).arguments
  end

  it 'Print method returns parameter' do
    test_string = 'Testing, testing, 1 2, 1 2.'
    expect(web_in_out.print(test_string)).to be(test_string)
  end

  it 'Has a get play against computer method' do
    expect(web_in_out).to respond_to(:get_play_against_computer)
  end

  it 'Has a set board size method' do
    expect(web_in_out).to respond_to(:set_board_size)
  end

  it 'Has a get player name method' do
    expect(web_in_out).to respond_to(:get_player_name).with(1).arguments
  end

  it 'Has a select move method' do
    expect(web_in_out).to respond_to(:select_move)
  end

  it 'Has a clear method' do
    expect(web_in_out).to respond_to(:clear)
  end
end