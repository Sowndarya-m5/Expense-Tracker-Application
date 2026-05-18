package com.example.Expense_Tracker_Application.service;

import com.example.Expense_Tracker_Application.model.Transaction;
import com.example.Expense_Tracker_Application.repository.TransactionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {

    private final TransactionRepository repo;

    public TransactionService(TransactionRepository repo) {
        this.repo = repo;
    }

    public List<Transaction> getAll() {
        return repo.findAll();
    }

    public Transaction save(Transaction t) {
        return repo.save(t);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public Transaction update(Long id, Transaction t) {
        Transaction existing = repo.findById(id).orElseThrow();

        existing.setDescription(t.getDescription()); // ✅
        existing.setAmount(t.getAmount());
        existing.setCategory(t.getCategory());
        existing.setType(t.getType());
        existing.setDate(t.getDate());

        return repo.save(existing);
    }
}