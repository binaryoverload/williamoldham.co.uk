---
title: "Savings account interest: The breakdown"
pubDate: "2019-09-07"
updatedDate: "2024-03-18"
---

> This blog post is aimed at people in the UK. The information contained within will most likely not be applicable to other countries!
>
> **Disclaimer:** I am not a financial expert of any kind. Please consult a financial adviser if you want help with managing your cold hard cash!

I was really confused with savings accounts and how the interest worked on them for a long time. While there was a lot of information telling you the best interest rates, there were very few resources explaining the maths behind them as well. Very often when looking at savings accounts you will see two interest figures quoted: Gross and AER. In a lot of cases, these will actually be the same! In this post, I will try and explain the interest on savings accounts as simple as possible.

## What is interest?

For those new to the party, a savings account is where you put money into a special account that allows you to gain extra money on top of this. This extra money is almost the banks thanking you for storing your money with them! The extra money that the bank pays you is determined by the **interest**. The interest is a percentage amount that can be paid yearly or monthly (There are other compounding periods however yearly and monthly are the most common!).

For example, if I had £1000 in a yearly savings account with an interest rate of 5% then each year I would be paid £50 of interest. If the savings account was monthly and the interest was paid at 5% each month (This is impossible to find in reality but provides a good demonstration) then at the end of the year I would be paid according to the formula:

**£1000 × (1.05)<sup>12</sup> = £1795.86**

In this post, you will notice me reference **compounding interest** or **compounding periods**. When interest is said to be compounded, it just means that interest is calculated for that compounding period whether that be daily, monthly, quarterly, bi-annually or yearly.

## Gross interest

Gross interest is the total amount of interest that you will be paid every year. For yearly savings accounts, this gross interest will represent the interest that will be paid at the end of the yearly period. If you have a monthly savings account (That is, a savings account that pays interest every month) then the gross interest will be the monthly interest multiplied by 12. In almost all cases, the banks do not tell you the monthly interest and instead just give you the gross interest. For example, if the gross interest is **1.98%**, you can get the monthly interest by dividing the interest by 12: **1.98% ÷ 12 = 0.165%**

## AER

AER stands for **A**nnual **E**quivalent **R**ate which is a fancy way of saying that this is the interest rate that you would get if you were paid yearly. Why is this important you ask? Well, to be able to compare savings accounts you need some information that is standardised for all accounts. The AER means that you will definitely know that with a higher AER, you will get a higher amount of interest paid no matter what the payment period.

To calculate the AER can be a little confusing. For now, I’ll put down the entire formula and then explain it bit by bit:

$$
AER=(1+\frac{\textrm{interest}}{\textrm{number of compounding periods}})^{\textrm{number of pay periods}})-1
$$

I know this looks confusing, but it should make sense once you wrap your head around it!

You may notice $$\frac{\textrm{interest}}{\textrm{number of compounding periods}}$$ looks familiar! This is the same calculation we did from the gross interest to work out the interest for each compounding period. Say for example the gross interest is **2.4%** and is paid monthly.

The interest applied each month will be **2.4% ÷ 12 = 0.2%**

If we substitute these values into the formula then we get: $$AER=(1+\frac{0.024}{12})^{12})-1$$

1. We are taking the interest that's **compounded** every month and adding it to 1 to make it into an increasing multiplier.

- **1 + 0.002 = 1.002** equates to **100% + 0.2% = 100.2%** meaning "take the existing amount and add 0.2% to it".
- This is the multiplier we would use if we wanted to work out how much we had in our savings account _after_ the interest had been applied.

2. We then raise this multiplier to the power of 12 to simulate the interest being added for each month of a year: **100.2%<sup>12</sup> = 102.42%**
3. The least step is to subtract 1 (or 100% in percentage form) from the result to get a number that is easier to compare to the original gross interest value. **2.42%** is the final AER we get for a gross interest of **2.4%%**.

You might be able to see that a gross interest of 2.4% is better to be applied monthly over a year rather than just once a year. Let’s compare other values:

| Compounding period (Number of times a year) | Gross interest | AER      |
| ------------------------------------------- | -------------- | -------- |
| Daily (365)                                 | 2.4%           | 2.42895% |
| Weekly (52)                                 | 2.4%           | 2.42846% |
| Monthly (12)                                | 2.4%           | 2.42658% |
| Quarterly (4)                               | 2.4%           | 2.42169% |
| Bi-Annually (2)                             | 2.4%           | 2.41440% |
| Annually (1)                                | 2.4%           | 2.40000% |

As you can see by these values, you get paid more interest the more frequent your compounding period is! So even if two bank accounts have the same gross interest, the AER will show you that the one that pays you monthly will pay you more than the account that pays you annually.

Thanks for reading! This post was a bit longer than I usually would have liked to aim for but I wanted to make sure I covered everything I had in my head!
