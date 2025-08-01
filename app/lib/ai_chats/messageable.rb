# frozen_string_literal: true

module AiChats
  module Messageable

    private

    # It propagates the spinner to the client
    # @param message [String] the message to show in the spinner, if missing only dots are shown
    def show_spinner(message: nil)
      return unless ai_chat

      Turbo::StreamsChannel.broadcast_after_to([ai_chat, "ai_messages"],
                                               target: "ai_chat_#{ai_chat.id}_messages",
                                               partial: "ai_chats/spinner",
                                               locals: { message: })
    end

    # It removes the spinner from the client
    def remove_spinner
      Turbo::StreamsChannel.broadcast_remove_to([ai_chat, "ai_messages"], target: "ai_chat__spinner")
    end

    # It adds a new AI message to the client
    def add_ai_message(ai_message:)
      Turbo::StreamsChannel.broadcast_append_to([ai_chat, "ai_messages"],
                                                target: "ai_chat_#{ai_chat.id}_messages",
                                                partial: "ai_messages/ai_message",
                                                locals: { ai_chat: ai_chat, ai_message: })
    end
  end
end
