class UpdateForeignKeyToPlayers < ActiveRecord::Migration[5.2]
  def change
  	remove_foreign_key :players, :rosters

  	add_foreign_key :players, :rosters, on_delete: :cascade
  end
end
