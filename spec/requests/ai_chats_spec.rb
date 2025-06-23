require 'rails_helper'

RSpec.describe "AiChats", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/ai_chats/index"
      expect(response).to have_http_status(:success)
    end
  end

end
