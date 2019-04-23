Rails.application.routes.draw do
  get 'teams/new'
  
  post "/login", to: "sessions#create"
end
