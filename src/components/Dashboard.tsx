import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, TrendingUp, TrendingDown, DollarSign, PieChart, BarChart3 } from "lucide-react";
import { IncomeExpenseChart } from "./charts/IncomeExpenseChart";
import { ProfitLossChart } from "./charts/ProfitLossChart";
import { CategoryChart } from "./charts/CategoryChart";
import { VoiceButton } from "./VoiceButton";
import { StatsCard } from "./StatsCard";

export function Dashboard() {
  // Mock data - will be replaced with real data from Supabase
  const todayStats = {
    income: 2850,
    expenses: 1200,
    profit: 1650,
    transactions: 15
  };

  const recentTransactions = [
    { id: 1, item: "दूध", type: "expense", amount: 50, time: "10:30 AM" },
    { id: 2, item: "Cold Drinks", type: "sale", amount: 90, time: "11:45 AM" },
    { id: 3, item: "चाय पत्ती", type: "expense", amount: 120, time: "2:15 PM" },
    { id: 4, item: "Snacks", type: "sale", amount: 150, time: "3:30 PM" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              आपका बिजनेस डैशबोर्ड
            </h1>
            <p className="text-muted-foreground">Today's Financial Overview</p>
          </div>
          <Button variant="outline" className="shadow-card">
            <PieChart className="mr-2 h-4 w-4" />
            View Reports
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Today's Income"
            value={`₹${todayStats.income.toLocaleString()}`}
            icon={TrendingUp}
            trend="+12%"
            className="bg-gradient-success"
          />
          <StatsCard
            title="Today's Expenses"
            value={`₹${todayStats.expenses.toLocaleString()}`}
            icon={TrendingDown}
            trend="-5%"
            variant="expense"
          />
          <StatsCard
            title="Net Profit"
            value={`₹${todayStats.profit.toLocaleString()}`}
            icon={DollarSign}
            trend="+18%"
            className="bg-gradient-primary"
          />
          <StatsCard
            title="Transactions"
            value={todayStats.transactions.toString()}
            icon={BarChart3}
            trend="+3"
            variant="neutral"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Income vs Expenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <IncomeExpenseChart />
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-secondary" />
                Profit & Loss Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ProfitLossChart />
            </CardContent>
          </Card>
        </div>

        {/* Category Analysis & Recent Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle>Category Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <CategoryChart />
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div>
                      <p className="font-medium">{transaction.item}</p>
                      <p className="text-sm text-muted-foreground">{transaction.time}</p>
                    </div>
                    <div className={`text-right ${
                      transaction.type === 'sale' ? 'text-success' : 'text-destructive'
                    }`}>
                      <p className="font-semibold">
                        {transaction.type === 'sale' ? '+' : '-'}₹{transaction.amount}
                      </p>
                      <p className="text-xs">
                        {transaction.type === 'sale' ? 'Sale' : 'Expense'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Tips */}
        <Card className="shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle>💡 आज की सलाह (Today's Financial Tip)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              <strong>Track Daily Cash Flow:</strong> आपका आज का profit margin 58% है! 
              Keep monitoring your milk and cold drink sales - they're your top performers.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Floating Voice Button */}
      <VoiceButton />
    </div>
  );
}