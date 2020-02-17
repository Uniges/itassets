package org.eugene.itassets.telegram.util;

import org.eugene.itassets.domain.*;
import org.eugene.itassets.domain.category.AddonCategory;
import org.eugene.itassets.domain.category.ComputerCategory;
import org.eugene.itassets.domain.category.HardwareCategory;
import org.eugene.itassets.domain.category.SoftwareCategory;
import org.eugene.itassets.repository.*;
import org.eugene.itassets.telegram.component.ItAssetBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Message;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.ReplyKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.KeyboardButton;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.KeyboardRow;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class BotUtil {
    private final ItAssetBot itAssetBot;
    private final HardwareRepository hardwareRepository;
    private final SoftwareRepository softwareRepository;
    private final EmployeeRepository employeeRepository;
    private final ComputerRepository computerRepository;
    private final AddonRepository addonRepository;


    public BotUtil(ItAssetBot itAssetBot, HardwareRepository hardwareRepository,
                   SoftwareRepository softwareRepository, EmployeeRepository employeeRepository,
                   ComputerRepository computerRepository, AddonRepository addonRepository) {
        this.itAssetBot = itAssetBot;
        this.hardwareRepository = hardwareRepository;
        this.softwareRepository = softwareRepository;
        this.employeeRepository = employeeRepository;
        this.computerRepository = computerRepository;
        this.addonRepository = addonRepository;
    }

    public void answerToUser(Update update) {
        Message message = update.getMessage();
        Long chatId = message.getChatId();

        if (message != null && message.hasText()) {
            if (message.getText().matches(DEPARTMENT_REGULAR_EXPRESSION)) {
                String[] values = message.getText().split("Отдел #");
                List<Employee> employeeList = employeeRepository
                        .findAll()
                        .stream()
                        .filter(x -> x.getDepartment().getId().equals(Long.valueOf(values[1])))
                        .collect(Collectors.toList());
                if (employeeList.size() == 0)
                    sendMessageToUser(chatId, "Сотрудники не найдены", "data");
                for (Employee employee : employeeList) {
                    sendMessageToUser(chatId, String.format
                                    (
                                            "Фамилия: %s\nИмя: %s\nОтчество: %s",
                                            employee.getLastName(), employee.getFirstName(), employee.getMiddleName()),
                            "data"
                    );
                }
            } else if (message.getText().equals("Настольные ПК")) {
                writeDataToUser(computerRepository.findByComputerCategory(ComputerCategory.PC), chatId);
            } else if (message.getText().equals("Ноутбуки")) {
                writeDataToUser(computerRepository.findByComputerCategory(ComputerCategory.NOTEBOOK), chatId);
            } else if (message.getText().equals("Материнские платы")) {
                writeDataToUser(hardwareRepository.findByHardwareCategory(HardwareCategory.MOTHERBOARD), chatId);
            } else if (message.getText().equals("Процессоры")) {
                writeDataToUser(hardwareRepository.findByHardwareCategory(HardwareCategory.CPU), chatId);
            } else if (message.getText().equals("Оперативная память")) {
                writeDataToUser(hardwareRepository.findByHardwareCategory(HardwareCategory.RAM), chatId);
            } else if (message.getText().equals("Видеокарты")) {
                writeDataToUser(hardwareRepository.findByHardwareCategory(HardwareCategory.GPU), chatId);
            } else if (message.getText().equals("Жесткие диски")) {
                writeDataToUser(hardwareRepository.findByHardwareCategory(HardwareCategory.ROM), chatId);
            } else if (message.getText().equals("Блоки питания")) {
                writeDataToUser(hardwareRepository.findByHardwareCategory(HardwareCategory.PS), chatId);
            } else if (message.getText().equals("OC")) {
                writeDataToUser(softwareRepository.findBySoftwareCategory(SoftwareCategory.OS), chatId);
            } else if (message.getText().equals("Программы")) {
                writeDataToUser(softwareRepository.findBySoftwareCategory(SoftwareCategory.PROGRAM), chatId);
            } else if (message.getText().equals("Мониторы")) {
                writeDataToUser(addonRepository.findByAddonCategory(AddonCategory.MONITOR), chatId);
            } else if (message.getText().equals("Принтеры")) {
                writeDataToUser(addonRepository.findByAddonCategory(AddonCategory.PRINTER), chatId);
            } else if (message.getText().equals("Клавиатуры")) {
                writeDataToUser(addonRepository.findByAddonCategory(AddonCategory.KEYBOARD), chatId);
            } else if (message.getText().equals("Мыши")) {
                writeDataToUser(addonRepository.findByAddonCategory(AddonCategory.MOUSE), chatId);
            }
            else {
                switch (message.getText()) {
                    case "/help":
                        sendMessageToUser(chatId, HELP_MESSAGE, "/help");
                        break;
                    case "/start":
                        sendMessageToUser(chatId, START_MESSAGE, "/start");
                        break;
                    case "/hard":
                        for (Hardware hardware : hardwareRepository.findAll()) {
                            sendMessageToUser(chatId, String.format
                                    ("Название: %s\n Описание: %s", hardware.getName(), hardware.getDescription()), "/hard");
                        }
                        break;
                    case "/soft":
                        for (Software software : softwareRepository.findAll()) {
                            sendMessageToUser(chatId, String.format
                                    ("Название: %s\n Описание: %s", software.getName(), software.getDescription()), "/soft");
                        }
                        break;
                    default:
                        sendMessageToUser(chatId, "", message.getText());
                        break;
                }
            }
        }
    }

    public void writeDataToUser(List<? extends AbstractEntity> dataList, Long chatId) {
        if (dataList.size() == 0)
            sendMessageToUser(chatId, "Данные не найдены", "data");
        for (AbstractEntity abstractEntity : dataList) {
            if (abstractEntity instanceof Computer) {
                Computer computer = (Computer)abstractEntity;
                String ownerName = "";

                if (computer.getEmployee() == null) ownerName = "Нет владельца";
                else {
                    Employee employee = computer.getEmployee();
                    ownerName = String.format("%s %s %s", employee.getLastName(),
                                employee.getFirstName(), employee.getMiddleName());
                }

                sendMessageToUser(chatId, abstractEntity.toString() + String.format("\n" +
                        "Владелец: %s", ownerName), "data");
            }
            else
                sendMessageToUser(chatId, abstractEntity.toString(), "data");
        }
    }


    public void sendMessageToUser(Long chatId, String text, String command) {
        SendMessage sendMessage = new SendMessage();
        sendMessage.enableMarkdown(true);
        sendMessage.setChatId(chatId);
        sendMessage.setText(text);
        try {
            setButtons(sendMessage, command);
            if (sendMessage.getText().equals("")) sendMessage.setText("Неизвестная команда!");
            itAssetBot.execute(sendMessage);
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }
    }

    public void setButtons(SendMessage sendMessage, String command) {
        sendMessage.setReplyMarkup(replyKeyboardMarkup);

        if (command.equals("/start") || command.equals("Главное меню")) {
            replyKeyboardMarkup.setKeyboard(BotUtil.keyBoardMain);
            sendMessage.setText("Главное меню:");
        } else if (command.equals("Сотрудники"))  {
            replyKeyboardMarkup.setKeyboard(keyBoardEmployee);
            sendMessage.setText("Отделы сотрудников:");
        } else if (command.equals("Компьютеры")) {
            replyKeyboardMarkup.setKeyboard(keyBoardComputer);
            sendMessage.setText("Категории компьютеров:");
        } else if (command.equals("Железо")) {
            replyKeyboardMarkup.setKeyboard(keyBoardHardware);
            sendMessage.setText("Категории железа:");
        } else if (command.equals("Софт")) {
            replyKeyboardMarkup.setKeyboard(keyBoardSoftware);
            sendMessage.setText("Категории аппаратного обеспечения:");
        } else if (command.equals("Периферические устройства")) {
            replyKeyboardMarkup.setKeyboard(keyBoardAddons);
            sendMessage.setText("Категории периферических устройств:");
        }
    }



    public static List<KeyboardRow> keyBoardMain = new ArrayList<>();
    public static List<KeyboardRow> keyBoardEmployee = new ArrayList<>();
    public static List<KeyboardRow> keyBoardComputer = new ArrayList<>();
    public static List<KeyboardRow> keyBoardHardware = new ArrayList<>();
    public static List<KeyboardRow> keyBoardSoftware = new ArrayList<>();
    public static List<KeyboardRow> keyBoardAddons = new ArrayList<>();
    public static ReplyKeyboardMarkup replyKeyboardMarkup = new ReplyKeyboardMarkup();

    private static final String START_MESSAGE =
            "Добрый день, чем могу быть полезен?";
    private static final String HELP_MESSAGE =
            "Помощь...";
    private static final String DEPARTMENT_REGULAR_EXPRESSION = "(Отдел #)(\\d)";

    static {
        // Main buttons
        KeyboardRow mainFirstRow = new KeyboardRow();
        mainFirstRow.add(new KeyboardButton("Сотрудники"));
        mainFirstRow.add(new KeyboardButton("Компьютеры"));
        KeyboardRow mainSecondRow = new KeyboardRow();
        mainSecondRow.add(new KeyboardButton("Железо"));
        mainSecondRow.add(new KeyboardButton("Софт"));
        KeyboardRow mainThirdRow = new KeyboardRow();
        mainThirdRow.add(new KeyboardButton("Периферические устройства"));

        // Main menu button
        KeyboardRow mainMenuRow = new KeyboardRow();
        mainMenuRow.add(new KeyboardButton("Главное меню"));

        // Employee buttons
        KeyboardRow employeeFirstRow = new KeyboardRow();
        employeeFirstRow.add(new KeyboardButton("Отдел #1"));
        employeeFirstRow.add(new KeyboardButton("Отдел #2"));
        KeyboardRow employeeSecondRow = new KeyboardRow();
        employeeSecondRow.add(new KeyboardButton("Отдел #3"));
        employeeSecondRow.add(new KeyboardButton("Отдел #4"));

        // Computer buttons
        KeyboardRow computerFirstRow = new KeyboardRow();
        computerFirstRow.add(new KeyboardButton("Настольные ПК"));
        computerFirstRow.add(new KeyboardButton("Ноутбуки"));

        // Hardware buttons
        KeyboardRow hardwareFirstRow = new KeyboardRow();
        hardwareFirstRow.add(new KeyboardButton("Материнские платы"));
        hardwareFirstRow.add(new KeyboardButton("Процессоры"));
        KeyboardRow hardwareSecondRow = new KeyboardRow();
        hardwareSecondRow.add(new KeyboardButton("Оперативная память"));
        hardwareSecondRow.add(new KeyboardButton("Видеокарты"));
        KeyboardRow hardwareThirdRow = new KeyboardRow();
        hardwareThirdRow.add(new KeyboardButton("Жесткие диски"));
        hardwareThirdRow.add(new KeyboardButton("Блоки питания"));

        // Software buttons
        KeyboardRow softwareFirstRow = new KeyboardRow();
        softwareFirstRow.add(new KeyboardButton("OC"));
        softwareFirstRow.add(new KeyboardButton("Программы"));

        // Addon buttons
        KeyboardRow addonFirstRow = new KeyboardRow();
        addonFirstRow.add(new KeyboardButton("Мониторы"));
        addonFirstRow.add(new KeyboardButton("Принтеры"));
        KeyboardRow addonSecondRow = new KeyboardRow();
        addonSecondRow.add(new KeyboardButton("Клавиатуры"));
        addonSecondRow.add(new KeyboardButton("Мыши"));

        // Main menu
        keyBoardMain.add(mainFirstRow);
        keyBoardMain.add(mainSecondRow);
        keyBoardMain.add(mainThirdRow);

        // Employee menu
        keyBoardEmployee.add(employeeFirstRow);
        keyBoardEmployee.add(employeeSecondRow);
        keyBoardEmployee.add(mainMenuRow);

        // Computer menu
        keyBoardComputer.add(computerFirstRow);
        keyBoardComputer.add(mainMenuRow);

        // Hardware menu
        keyBoardHardware.add(hardwareFirstRow);
        keyBoardHardware.add(hardwareSecondRow);
        keyBoardHardware.add(hardwareThirdRow);
        keyBoardHardware.add(mainMenuRow);

        // Software menu
        keyBoardSoftware.add(softwareFirstRow);
        keyBoardSoftware.add(mainMenuRow);

        // Addons menu
        keyBoardAddons.add(addonFirstRow);
        keyBoardAddons.add(addonSecondRow);
        keyBoardAddons.add(mainMenuRow);

        replyKeyboardMarkup.setSelective(true);
        replyKeyboardMarkup.setResizeKeyboard(true);
        replyKeyboardMarkup.setOneTimeKeyboard(false);
    }
}
