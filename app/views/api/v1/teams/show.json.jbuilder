json.(@team, :id, :name, :email, :password_digest)
json.roster do
	json.players @players
end