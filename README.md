# Web Application, «Учет IT активов организации»

• Spring boot, REST, Hibernate, Security, Telegram API • Angular •

• Heroku: https://itasset.herokuapp.com/ (admin adm1n) • Telegram bot: @ItAssetBot •

Приложение разрабатывалось для создания единой системы учета IT активов.
Интерфейс сайта позволяет создавать сотрудников в 4 разных отделах организации.

![Image alt](https://github.com/Uniges/itassets/blob/master/src/main/resources/static/img/1.jpg)

Каждый сотрудник может иметь компьютер, последний может содержать в себе
неограниченое количество аппаратного, программного обеспечений, а также перефирических устройств.

![Image alt](https://github.com/Uniges/itassets/blob/master/src/main/resources/static/img/2.jpg)

При удалении компьютера удаляются все добавленные в него элементы, железо, софт, устройства.
Владелец компьютера, сотрудник, который может быть связан с компьютером, при этом, не удаляется.
Мы не имеем возможности удалить сотрудника до тех пор, пока не удалим его компьютер.
Для связи человека и компьютера, необходимо в свойствах компьютера указать ФИО и отдел существующего сотрудника.

![Image alt](https://github.com/Uniges/itassets/blob/master/src/main/resources/static/img/3.jpg)

Железо, софт и устройства - это IT активы, которые жестко связаны с существующим компьютером.
Мы не можем добавлять, изменять или удалять их. Это возможно только через интерфейс конкретного компьютера.

Также приложение имеет связанный с ним информационный телеграм бот, который дублирует меню веб приложения
и выдает пользователю информацию по запросу из контекстного меню. Авторизация не требуется.

![Image alt](https://github.com/Uniges/itassets/blob/master/src/main/resources/static/img/4.jpg)
