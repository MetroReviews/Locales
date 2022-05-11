module.exports = {
    overview: require("../locales.config.js")["en"],
    title: '<span class="text-amber-500 font-bold">Metro</span> Reviews',
    navbar: {
        home: 'Home',
        team: 'Team',
        lists: 'Listen',
        partners: 'Partner'
    },
    footer: {
        rights: 'Alle Rechte vorbehalten.',
        description: 'Wir machen den Akzeptierungs- und Ablehnungsprozess für Botlists einfach um deinen Mitarbeitern mehr Zeit für wichtige Dinge wie die Moderation des Servers oder Unterstüztung zu geben!',
        menus: {
            info: {
                title: 'Info',
                items: {
                    team: 'Team',
                    lists: 'Listen',
                    faq: 'FAQ\'s'
                }
            },
            support: {
                title: 'Support',
                items: {
                    partners: 'Partner',
                    team: 'Team'
                }
            },
            legal: {
                title: 'Legales',
                items: {
                    tos: 'Nutzungsbedingungen',
                    privacy: 'Datenschutzerklärung',
                    cookies: 'Cookie-Zustimmung'
                }
            },
            misc: {
                title: 'Weiteres',
                items: {
                    rules: 'Botlist-Regeln',
                    guidelines: 'Botlist-Richtlinien',
                    howto: 'Eine Liste hinzufügen'
                }
            },
        },
        footerCredits: 'Erstellt mit viel ❤️ von Toxic Dev#5936 & Rootspring#6701'
    },
    index: {
        title: 'Metro Reviews',
        description: 'Die zentralisierte Lösung fürs Management von Discord-BotLists',
        buttons: {
            dashboard: 'Dashboard',
            support: 'Support Server',
            with_discord: 'Via Discord Einloggen'
        },
        features: {
            title: 'Warum solltest du <span class="text-amber-500 font-bold">Metro</span> wählen?',
            description: 'Wir machen den Akzeptierungs- und Ablehnungsprozess für Botlists einfach um deinen Mitarbeitern mehr Zeit für wichtige Dinge wie die Moderation des Servers oder Unterstüztung zu geben!',
            buttonText: 'Zu Discord hinzufügen',
            items: [
                 { icon: 'fas fa-check', title: 'Gemanagte Akzeptierung', description: 'Wir managen das Akzeptieren von Bots und machen es einfacher für deine Mitarbeiter zu machen, was sie am besten können. Und währenddessen bekommst du die kurze Wartezeit für Bots, die wir alle wollen!' },
                 { icon: 'fas fa-x', title: 'Gemanagte Ablehnung', description: 'Das Ablehnen von Bots ist schwierig und endet in den meisten Fällen in einer Auseinandersetzung mit dem Besitzer des Bots. Wir automatisieren diesen Ablehnungsprozess für dich und überspringen den Mittelsmann'},
                 { icon: 'fas fa-user-cog', title: 'Gemanagte Whitelist', description: 'Mit der Metro Reviews Integration sind alle nötigen Befehle und Funktionen auf die Mitarbeiter der Botlists limitiert und werden von unserer eingebauten Whitelist kontrolliert.' },
                 { icon: 'fas fa-book', title: 'Gemanagte Beanspruchung zum Testen von Bots', description: 'Bots zum Testen zu beanspruchen war nie einfacher. Wir stellen eine große Vielzahl and Befehlen und Optionen bereit, die deine Mitarbeiter ermutigen und glücklich machen. Inklusive eines interaktiven Administrator-Panels' }
            ]
        },
        list_stats: {
            chosen: 'Unterstützt von <span class="text-amber-500">{list_count}</span> wundervollen Botlists',
            lists: {
                name: '{list_name}',
                domain: '{list_domain}',
                states: {
                    pending: '📌 Ausstehende Unterstützung',
                    supported: '😀 Unterstützte Liste',
                    defunction: '☠️ Stillgelegt',
                    blacklisted: '🧐 Blacklisted',
                    unconfirmed: '👀 Unbestätigt',
                    err_failed: 'Fehler beim Abrufen des Status.'
                }
            }
        }
    },
    team: {
        title: 'Unsere Mitglieder',
        description: 'Alle Botlist-Mitglieder und Owner, die uns unterstützen und das Projekt möglich machen!!',
        linkcordLang: 'de',
        noWidget: 'Kein Widget',
        roles: {
            owner: 'Botlist-Besitzer',
            sudo: 'Metro Admin',
            review: 'Bot-Tester'
        }
    },
};
