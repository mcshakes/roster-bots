class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players, id: false do |t|
      t.references :roster, foreign_key: true

      t.string :uuid, null: false
      t.string :name
      t.integer :speed
      t.integer :strength
      t.integer :agility

      t.timestamps
    end

    add_index :players, :uuid, unique: true
  end
end
