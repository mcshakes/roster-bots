class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.references :roster, foreign_key: true
      t.string :name
      t.integer :speed
      t.integer :strength
      t.integer :agility

      t.timestamps
    end
  end
end
