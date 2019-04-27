json.(@team, :id, :name, :email, :password_digest)

json.roster do
	json.players @players
end

json.auth_token @auth_token