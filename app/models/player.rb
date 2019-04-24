class Player < ApplicationRecord
  belongs_to :roster

  private

  def generate_player_id
  	[*('A'..'Z'),*('0'..'9')].shuffle[0,8].join
  	self.update(player_id: )
  end
end
