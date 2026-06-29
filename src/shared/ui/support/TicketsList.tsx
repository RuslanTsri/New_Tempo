import React from 'react';
// Додаємо імпорти з react-native
import { View, Text, TouchableOpacity } from 'react-native';

// Описуємо інтерфейс для тікета (якщо використовуєш окремий файл)
interface Ticket {
    id: string;
    status: string;
    date: string;
    lastMsg: string;
}

const TicketsList = () => {
    const mockTickets: Ticket[] = [
        { id: 'T-882', status: 'В роботі', date: '31.03.2026', lastMsg: 'Технік перевіряє логі...' },
        { id: 'T-879', status: 'Вирішено', date: '28.03.2026', lastMsg: 'Дякуємо за звернення!' },
    ];

    return (
        <View className="gap-y-4">
            <Text className="text-h4 text-surface-bg font-unbounded-bold mb-2">
                Ваші звернення
            </Text>

            {mockTickets.map((ticket) => (
                <TouchableOpacity
                    key={ticket.id}
                    activeOpacity={0.7}
                    className="bg-white p-5 rounded-3xl border border-brand-gray/20 shadow-sm"
                >
                    <View className="flex-row justify-between mb-2">
                        <Text className="font-unbounded-bold text-brand-orange">
                            {ticket.id}
                        </Text>

                        <View className={`px-3 py-1 rounded-full ${
                            ticket.status === 'Вирішено'
                                ? 'bg-status-success/10'
                                : 'bg-status-warning/10'
                        }`}>
                            <Text className={`text-[10px] font-bold ${
                                ticket.status === 'Вирішено'
                                    ? 'text-status-success'
                                    : 'text-status-warning'
                            }`}>
                                {ticket.status.toUpperCase()}
                            </Text>
                        </View>
                    </View>

                    <Text className="font-evolventa text-surface-bg text-body" numberOfLines={1}>
                        {ticket.lastMsg}
                    </Text>

                    <Text className="font-evolventa text-caption text-text-muted mt-2">
                        {ticket.date}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default TicketsList;