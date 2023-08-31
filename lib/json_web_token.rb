class JsonWebToken
	class << self

		def encode(payload, exp = 24.hours.from_now)
			payload[:exp] = exp.to_i
			JWT.encode(payload, Rails.application.secrets.secret_key_base)
		end

		def decode(token)
			decoded = JWT.encode(token, Rails.application.secrets.secret_key_base)[0]
			HashWithIndifferentAccess.new decoded
		end
	end
end