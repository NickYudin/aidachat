# frozen_string_literal: true

class ChatsController < ApplicationController
  def index
    @messages = Message.all.order(:created_at)
  end

  def create
    user_message = params[:message][:content]

    # Save the user's message
    Message.create(user: "User", content: user_message)

    # Interact with the LLM (mocked for now)
    llm_response = interact_with_llm(user_message)

    # Save the LLM's response
    Message.create(user: "LLM", content: llm_response)

    redirect_to root_path
  end

  private

  def interact_with_llm(user_message)
     # will interact with the LLM to get a response
  end
end
