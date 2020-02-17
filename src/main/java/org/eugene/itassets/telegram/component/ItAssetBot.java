package org.eugene.itassets.telegram.component;

import org.eugene.itassets.repository.*;
import org.eugene.itassets.telegram.util.BotUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.objects.Update;

@Component
@PropertySource("classpath:telegram.properties")
public class ItAssetBot extends TelegramLongPollingBot {
    private final BotUtil botUtil;

    @Value("${bot.username}")
    private String botName;
    @Value("${bot.token}")
    private String botToken;

    @Autowired
    public ItAssetBot(HardwareRepository hardwareRepository, SoftwareRepository softwareRepository,
                      EmployeeRepository employeeRepository, ComputerRepository computerRepository,
                      AddonRepository addonRepository) {
        this.botUtil = new BotUtil(this, hardwareRepository, softwareRepository, employeeRepository,
                                                   computerRepository, addonRepository);
    }


    @Override
    public void onUpdateReceived(Update update) {
        this.botUtil.answerToUser(update);
    }

    @Override
    public String getBotUsername() {
        return botName;
    }

    @Override
    public String getBotToken() {
        return botToken;
    }
}
