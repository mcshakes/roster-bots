w# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_24_225111) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "players", id: false, force: :cascade do |t|
    t.bigint "roster_id"
    t.string "uuid", null: false
    t.string "name"
    t.integer "speed"
    t.integer "strength"
    t.integer "agility"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["roster_id"], name: "index_players_on_roster_id"
    t.index ["uuid"], name: "index_players_on_uuid", unique: true
  end

  create_table "rosters", force: :cascade do |t|
    t.bigint "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id"], name: "index_rosters_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
  end

  add_foreign_key "players", "rosters"
  add_foreign_key "rosters", "teams"
end
